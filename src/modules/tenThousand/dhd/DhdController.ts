import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhd")
export default class DhdController {
  @operation({
    summary: "Get Dhd",
  })
  @get()
  static getDhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhd",
  })
  @post("{id}")
  static createDhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
