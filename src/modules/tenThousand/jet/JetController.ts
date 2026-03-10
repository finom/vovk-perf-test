import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jet")
export default class JetController {
  @operation({
    summary: "Get Jet",
  })
  @get()
  static getJet = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jet",
  })
  @post("{id}")
  static createJet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
