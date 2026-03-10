import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("koi")
export default class KoiController {
  @operation({
    summary: "Get Koi",
  })
  @get()
  static getKoi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Koi",
  })
  @post("{id}")
  static createKoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
