import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hod")
export default class HodController {
  @operation({
    summary: "Get Hod",
  })
  @get()
  static getHod = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hod",
  })
  @post("{id}")
  static createHod = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
