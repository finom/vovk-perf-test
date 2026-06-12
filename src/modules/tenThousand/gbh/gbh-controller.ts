import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbh")
export default class GbhController {
  @operation({
    summary: "Get Gbh",
  })
  @get()
  static getGbh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbh",
  })
  @post("{id}")
  static createGbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
