import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyk")
export default class KykController {
  @operation({
    summary: "Get Kyk",
  })
  @get()
  static getKyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyk",
  })
  @post("{id}")
  static createKyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
