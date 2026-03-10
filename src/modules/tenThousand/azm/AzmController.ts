import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("azm")
export default class AzmController {
  @operation({
    summary: "Get Azm",
  })
  @get()
  static getAzm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Azm",
  })
  @post("{id}")
  static createAzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
