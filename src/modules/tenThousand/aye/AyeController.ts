import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aye")
export default class AyeController {
  @operation({
    summary: "Get Aye",
  })
  @get()
  static getAye = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aye",
  })
  @post("{id}")
  static createAye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
