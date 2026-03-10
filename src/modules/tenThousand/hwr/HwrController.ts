import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hwr")
export default class HwrController {
  @operation({
    summary: "Get Hwr",
  })
  @get()
  static getHwr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hwr",
  })
  @post("{id}")
  static createHwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
