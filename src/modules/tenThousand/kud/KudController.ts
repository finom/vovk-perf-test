import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kud")
export default class KudController {
  @operation({
    summary: "Get Kud",
  })
  @get()
  static getKud = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kud",
  })
  @post("{id}")
  static createKud = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
