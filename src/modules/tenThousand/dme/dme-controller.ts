import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dme")
export default class DmeController {
  @operation({
    summary: "Get Dme",
  })
  @get()
  static getDme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dme",
  })
  @post("{id}")
  static createDme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
