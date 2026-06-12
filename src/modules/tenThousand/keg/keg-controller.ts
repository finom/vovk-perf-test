import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("keg")
export default class KegController {
  @operation({
    summary: "Get Keg",
  })
  @get()
  static getKeg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Keg",
  })
  @post("{id}")
  static createKeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
