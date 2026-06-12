import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("acu")
export default class AcuController {
  @operation({
    summary: "Get Acu",
  })
  @get()
  static getAcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Acu",
  })
  @post("{id}")
  static createAcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
