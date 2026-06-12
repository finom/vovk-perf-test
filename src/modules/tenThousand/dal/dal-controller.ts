import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dal")
export default class DalController {
  @operation({
    summary: "Get Dal",
  })
  @get()
  static getDal = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dal",
  })
  @post("{id}")
  static createDal = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
