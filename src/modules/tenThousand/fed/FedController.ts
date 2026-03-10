import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fed")
export default class FedController {
  @operation({
    summary: "Get Fed",
  })
  @get()
  static getFed = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fed",
  })
  @post("{id}")
  static createFed = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
