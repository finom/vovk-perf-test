import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duf")
export default class DufController {
  @operation({
    summary: "Get Duf",
  })
  @get()
  static getDuf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Duf",
  })
  @post("{id}")
  static createDuf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
