import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoj")
export default class AojController {
  @operation({
    summary: "Get Aoj",
  })
  @get()
  static getAoj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aoj",
  })
  @post("{id}")
  static createAoj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
