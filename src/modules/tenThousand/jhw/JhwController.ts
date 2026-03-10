import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhw")
export default class JhwController {
  @operation({
    summary: "Get Jhw",
  })
  @get()
  static getJhw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhw",
  })
  @post("{id}")
  static createJhw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
