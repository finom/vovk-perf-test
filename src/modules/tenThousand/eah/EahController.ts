import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eah")
export default class EahController {
  @operation({
    summary: "Get Eah",
  })
  @get()
  static getEah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eah",
  })
  @post("{id}")
  static createEah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
