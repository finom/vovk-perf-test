import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ep")
export default class EpController {
  @operation({
    summary: "Get Ep",
  })
  @get()
  static getEp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ep",
  })
  @post("{id}")
  static createEp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
