import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgl")
export default class KglController {
  @operation({
    summary: "Get Kgl",
  })
  @get()
  static getKgl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgl",
  })
  @post("{id}")
  static createKgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
