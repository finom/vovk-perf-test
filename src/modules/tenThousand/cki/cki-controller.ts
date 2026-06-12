import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cki")
export default class CkiController {
  @operation({
    summary: "Get Cki",
  })
  @get()
  static getCki = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cki",
  })
  @post("{id}")
  static createCki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
