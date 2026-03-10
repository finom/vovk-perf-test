import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzt")
export default class KztController {
  @operation({
    summary: "Get Kzt",
  })
  @get()
  static getKzt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzt",
  })
  @post("{id}")
  static createKzt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
