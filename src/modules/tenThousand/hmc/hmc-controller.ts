import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmc")
export default class HmcController {
  @operation({
    summary: "Get Hmc",
  })
  @get()
  static getHmc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmc",
  })
  @post("{id}")
  static createHmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
