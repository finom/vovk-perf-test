import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ey")
export default class EyController {
  @operation({
    summary: "Get Ey",
  })
  @get()
  static getEy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ey",
  })
  @post("{id}")
  static createEy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
