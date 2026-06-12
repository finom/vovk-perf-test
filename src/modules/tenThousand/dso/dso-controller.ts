import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dso")
export default class DsoController {
  @operation({
    summary: "Get Dso",
  })
  @get()
  static getDso = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dso",
  })
  @post("{id}")
  static createDso = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
