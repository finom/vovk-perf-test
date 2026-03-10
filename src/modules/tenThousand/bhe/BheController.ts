import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhe")
export default class BheController {
  @operation({
    summary: "Get Bhe",
  })
  @get()
  static getBhe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhe",
  })
  @post("{id}")
  static createBhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
