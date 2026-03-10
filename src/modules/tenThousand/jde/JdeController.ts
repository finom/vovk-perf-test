import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jde")
export default class JdeController {
  @operation({
    summary: "Get Jde",
  })
  @get()
  static getJde = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jde",
  })
  @post("{id}")
  static createJde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
