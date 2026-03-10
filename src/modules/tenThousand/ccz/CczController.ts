import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccz")
export default class CczController {
  @operation({
    summary: "Get Ccz",
  })
  @get()
  static getCcz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ccz",
  })
  @post("{id}")
  static createCcz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
