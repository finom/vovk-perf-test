import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bag")
export default class BagController {
  @operation({
    summary: "Get Bag",
  })
  @get()
  static getBag = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bag",
  })
  @post("{id}")
  static createBag = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
