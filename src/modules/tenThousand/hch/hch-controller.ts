import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hch")
export default class HchController {
  @operation({
    summary: "Get Hch",
  })
  @get()
  static getHch = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hch",
  })
  @post("{id}")
  static createHch = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
