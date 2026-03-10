import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krs")
export default class KrsController {
  @operation({
    summary: "Get Krs",
  })
  @get()
  static getKrs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krs",
  })
  @post("{id}")
  static createKrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
