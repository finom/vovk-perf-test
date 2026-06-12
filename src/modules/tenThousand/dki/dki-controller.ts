import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dki")
export default class DkiController {
  @operation({
    summary: "Get Dki",
  })
  @get()
  static getDki = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dki",
  })
  @post("{id}")
  static createDki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
