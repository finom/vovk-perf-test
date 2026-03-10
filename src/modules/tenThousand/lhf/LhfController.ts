import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhf")
export default class LhfController {
  @operation({
    summary: "Get Lhf",
  })
  @get()
  static getLhf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhf",
  })
  @post("{id}")
  static createLhf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
