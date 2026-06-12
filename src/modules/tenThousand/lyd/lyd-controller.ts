import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyd")
export default class LydController {
  @operation({
    summary: "Get Lyd",
  })
  @get()
  static getLyd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lyd",
  })
  @post("{id}")
  static createLyd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
