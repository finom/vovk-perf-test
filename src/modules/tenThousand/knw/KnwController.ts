import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knw")
export default class KnwController {
  @operation({
    summary: "Get Knw",
  })
  @get()
  static getKnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Knw",
  })
  @post("{id}")
  static createKnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
