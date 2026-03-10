import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fii")
export default class FiiController {
  @operation({
    summary: "Get Fii",
  })
  @get()
  static getFii = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fii",
  })
  @post("{id}")
  static createFii = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
