import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("wr")
export default class WrController {
  @operation({
    summary: "Get Wr",
  })
  @get()
  static getWr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Wr",
  })
  @post("{id}")
  static createWr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
