import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frp")
export default class FrpController {
  @operation({
    summary: "Get Frp",
  })
  @get()
  static getFrp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frp",
  })
  @post("{id}")
  static createFrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
