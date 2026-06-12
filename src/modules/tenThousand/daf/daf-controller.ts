import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("daf")
export default class DafController {
  @operation({
    summary: "Get Daf",
  })
  @get()
  static getDaf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Daf",
  })
  @post("{id}")
  static createDaf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
