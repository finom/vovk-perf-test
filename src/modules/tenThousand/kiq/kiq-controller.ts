import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kiq")
export default class KiqController {
  @operation({
    summary: "Get Kiq",
  })
  @get()
  static getKiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kiq",
  })
  @post("{id}")
  static createKiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
