import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kki")
export default class KkiController {
  @operation({
    summary: "Get Kki",
  })
  @get()
  static getKki = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kki",
  })
  @post("{id}")
  static createKki = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
