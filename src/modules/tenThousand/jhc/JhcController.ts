import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhc")
export default class JhcController {
  @operation({
    summary: "Get Jhc",
  })
  @get()
  static getJhc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhc",
  })
  @post("{id}")
  static createJhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
