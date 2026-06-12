import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhv")
export default class DhvController {
  @operation({
    summary: "Get Dhv",
  })
  @get()
  static getDhv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhv",
  })
  @post("{id}")
  static createDhv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
