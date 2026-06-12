import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhj")
export default class DhjController {
  @operation({
    summary: "Get Dhj",
  })
  @get()
  static getDhj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dhj",
  })
  @post("{id}")
  static createDhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
