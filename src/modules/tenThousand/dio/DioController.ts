import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dio")
export default class DioController {
  @operation({
    summary: "Get Dio",
  })
  @get()
  static getDio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dio",
  })
  @post("{id}")
  static createDio = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
