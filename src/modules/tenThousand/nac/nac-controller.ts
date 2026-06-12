import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nac")
export default class NacController {
  @operation({
    summary: "Get Nac",
  })
  @get()
  static getNac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nac",
  })
  @post("{id}")
  static createNac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
