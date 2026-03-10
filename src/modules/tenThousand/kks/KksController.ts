import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kks")
export default class KksController {
  @operation({
    summary: "Get Kks",
  })
  @get()
  static getKks = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kks",
  })
  @post("{id}")
  static createKks = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
