import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbh")
export default class HbhController {
  @operation({
    summary: "Get Hbh",
  })
  @get()
  static getHbh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hbh",
  })
  @post("{id}")
  static createHbh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
