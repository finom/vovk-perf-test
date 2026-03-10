import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lep")
export default class LepController {
  @operation({
    summary: "Get Lep",
  })
  @get()
  static getLep = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lep",
  })
  @post("{id}")
  static createLep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
