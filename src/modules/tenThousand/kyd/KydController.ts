import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyd")
export default class KydController {
  @operation({
    summary: "Get Kyd",
  })
  @get()
  static getKyd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyd",
  })
  @post("{id}")
  static createKyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
