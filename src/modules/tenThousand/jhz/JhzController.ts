import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jhz")
export default class JhzController {
  @operation({
    summary: "Get Jhz",
  })
  @get()
  static getJhz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jhz",
  })
  @post("{id}")
  static createJhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
