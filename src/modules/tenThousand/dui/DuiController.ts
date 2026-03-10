import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dui")
export default class DuiController {
  @operation({
    summary: "Get Dui",
  })
  @get()
  static getDui = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dui",
  })
  @post("{id}")
  static createDui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
