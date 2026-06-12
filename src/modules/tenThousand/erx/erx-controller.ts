import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("erx")
export default class ErxController {
  @operation({
    summary: "Get Erx",
  })
  @get()
  static getErx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Erx",
  })
  @post("{id}")
  static createErx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
