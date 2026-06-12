import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgs")
export default class HgsController {
  @operation({
    summary: "Get Hgs",
  })
  @get()
  static getHgs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgs",
  })
  @post("{id}")
  static createHgs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
