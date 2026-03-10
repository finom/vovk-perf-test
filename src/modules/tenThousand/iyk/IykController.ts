import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyk")
export default class IykController {
  @operation({
    summary: "Get Iyk",
  })
  @get()
  static getIyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyk",
  })
  @post("{id}")
  static createIyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
